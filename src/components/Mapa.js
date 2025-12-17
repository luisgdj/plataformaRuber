// src/components/Mapa.js
import React, { useEffect, useRef } from 'react';
import '../styles/Mapa.css';

function Mapa({ archivoSvg, onZonaClick, departamentoActivo, zonaSeleccionada, resaltarDepartamento }) {
  const svgRef = useRef(null);

  const MAPEO_ZONAS = {
    // PS2 - Oncología Radioterápica
    "PS2_Radioterapia": "Oncología radioterápica",
    "estructura1": "Oncología radioterápica",
    "estructura2": "Oncología radioterápica",
    "estructura3": "Oncología radioterápica",
    "depRT": "Oncología radioterápica",
    "path9342": "Acelerador lineal",
    "path9253": "Ciberknife",

    // PS2 - Unidad Gamma
    "PS2_UnidadGamma": "Unidad gamma",
    "estructuraUG": "Unidad gamma",
    "depUG": "Unidad gamma",
    "path9344": "Gamma Knife",

    // PS2 - Medicina Nuclear
    "PS2_MedicinaNuclear": "Medicina nuclear",
    "estructuraMN": "Medicina nuclear",
    "depMN": "Medicina nuclear",
    "path4968": "PET-TAC",
    "path9276": "Gamma cámara",
    "path4972": "Mami PET",
    
    // PS1 - Diagnostico por Imagen
    "PS1_DiagnosticoImagen": "Diagnóstico por imagen",
    "estructuraDI": "Diagnóstico por imagen",
    "depDI": "Diagnóstico por imagen",
    "path10806": "Resonancia Magnética (RM)",
    "path10799":  "Resonancia Magnética (RM)",
    "path10311": "Radiología Convencional",
    "path10261": "Radiología Convencional",
    "path10794":  "Radiología Convencional",
    "path10262": "Tomografía Axial Computarizada (TAC)",
    "path3224": "Ecografía",
    "path10293": "Mamografía"
  };

  // Mapeo de departamentos a sus zonas/elementos relacionados
  const DEPARTAMENTO_A_ZONAS = {
    "Diagnóstico por imagen": [
      "PS1_DiagnosticoImagen", "estructuraDI", "depDI",
      "path10806", "path10799", "path10311", "path10261", 
      "path10794", "path10262", "path3224", "path10293"
    ],
    "Instalaciones radiactivas": [
      "PS2_Radioterapia", "PS2_UnidadGamma", "PS2_MedicinaNuclear",
      "estructura1", "estructura2", "estructura3", "estructuraUG", "estructuraMN",
      "depRT", "depUG", "depMN",
      "path9342", "path9253", "path9344", "path4968", "path9276", "path4972"
    ],
    "Medicina nuclear": [
      "PS2_MedicinaNuclear", "estructuraMN", "depMN",
      "path4968", "path9276", "path4972"
    ],
    "Oncología radioterápica": [
      "PS2_Radioterapia", "estructura1", "estructura2", "estructura3",
      "depRT", "path9342", "path9253"
    ],
    "Unidad gamma": [
      "PS2_UnidadGamma", "estructuraUG", "depUG", "path9344"
    ]
  };

  function getZoneIdFromElement(el) {
    if (!el) return null;
    if (el.id) return el.id;
    const dz = el.getAttribute && (el.getAttribute('data-zona') || el.getAttribute('data-name') || el.getAttribute('data-departamento'));
    if (dz) return dz;
    const il = el.getAttribute && (el.getAttribute('inkscape:label') || el.getAttribute('inkscape:label'.toString()));
    if (il) return il;
    const title = el.querySelector && el.querySelector('title');
    if (title && title.textContent) return title.textContent;
    return null;
  }

  function getFillOfElement(el) {
    if (!el) return '#666';
    const orig = el.getAttribute && el.getAttribute('data-original-fill');
    if (orig) return orig;

    const f = el.getAttribute && el.getAttribute('fill');
    if (f && f !== 'none') return f;

    try {
      const cs = window.getComputedStyle(el);
      if (cs && cs.fill && cs.fill !== 'none' && cs.fill !== '') return cs.fill;
    } catch (e) { /* ignore */ }

    const child = el.querySelector && el.querySelector('path, rect, polygon, circle, ellipse');
    if (child) return getFillOfElement(child);

    return '#666';
  }

  function hexToRgba(hex, a = 0.28) {
    if (!hex) return `rgba(0,0,0,${a})`;
    if (hex.startsWith('rgba')) return hex;
    if (hex.startsWith('rgb(')) return hex.replace('rgb(', 'rgba(').replace(')', `, ${a})`);
    if (hex.startsWith('#')) {
      let h = hex.slice(1);
      if (h.length === 3) h = h.split('').map(c => c + c).join('');
      const int = parseInt(h, 16);
      const r = (int >> 16) & 255;
      const g = (int >> 8) & 255;
      const b = int & 255;
      return `rgba(${r},${g},${b},${a})`;
    }
    return `rgba(0,0,0,${a})`;
  }

  // Función para oscurecer un color
  function darkenColor(hex, percent = 0.3) {
    if (!hex || !hex.startsWith('#')) return '#333';
    let h = hex.slice(1);
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const int = parseInt(h, 16);
    let r = (int >> 16) & 255;
    let g = (int >> 8) & 255;
    let b = int & 255;
    
    r = Math.floor(r * (1 - percent));
    g = Math.floor(g * (1 - percent));
    b = Math.floor(b * (1 - percent));
    
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  function clearAllHighlights(svgDoc) {
    if (!svgDoc) return;
    const all = svgDoc.querySelectorAll('path, rect, polygon, circle, ellipse');
    all.forEach(el => {
      el.classList.remove('mapa-selected');
      el.classList.remove('mapa-departamento-selected');
      if (el.hasAttribute('data-original-fill')) {
        el.setAttribute('fill', el.getAttribute('data-original-fill'));
      }
      if (el.hasAttribute('data-original-stroke')) {
        el.setAttribute('stroke', el.getAttribute('data-original-stroke'));
      } else {
        el.removeAttribute('stroke');
      }
      if (el.hasAttribute('data-original-stroke-width')) {
        el.setAttribute('stroke-width', el.getAttribute('data-original-stroke-width'));
      } else {
        el.removeAttribute('stroke-width');
      }
      el.style.filter = '';
      el.style.transition = '';
      el.style.opacity = '';
    });

    const halos = svgDoc.querySelectorAll('.mapa-halo');
    halos.forEach(h => h.parentNode && h.parentNode.removeChild(h));
  }

  function createHaloForElement(el, baseColor) {
    if (!el || !el.parentNode) return null;
    try {
      const clone = el.cloneNode(true);
      clone.classList.add('mapa-halo');
      clone.setAttribute('pointer-events', 'none');
      clone.setAttribute('fill', 'none');
      clone.setAttribute('stroke', baseColor);
      clone.setAttribute('stroke-opacity', '0.25');
      const origStrokeWidth = parseFloat(el.getAttribute('stroke-width') || 0);
      const haloWidth = Math.max(origStrokeWidth * 2.5, 12);
      clone.setAttribute('stroke-width', haloWidth.toString());
      el.parentNode.insertBefore(clone, el);
      return clone;
    } catch (err) {
      console.warn('No se pudo crear halo', err);
      return null;
    }
  }

  // Resaltar departamento completo (más oscuro)
  const highlightDepartamento = (svgDoc, nombreDepartamento) => {
    if (!svgDoc || !nombreDepartamento) return;
    clearAllHighlights(svgDoc);

    const zonasIds = DEPARTAMENTO_A_ZONAS[nombreDepartamento] || [];
    
    zonasIds.forEach(idZona => {
      const el = svgDoc.querySelector(`#${CSS.escape(idZona)}`);
      if (!el) return;

      el.classList.add('mapa-departamento-selected');
      let targets = [];
      if (el.tagName && el.tagName.toLowerCase() === 'g') {
        const children = el.querySelectorAll('path, rect, polygon, circle, ellipse');
        targets = children.length ? Array.from(children) : [el];
      } else {
        targets = [el];
      }

      targets.forEach(t => {
        // Guardar originales
        if (!t.hasAttribute('data-original-fill')) {
          const curFill = t.getAttribute('fill') || '';
          if (curFill) t.setAttribute('data-original-fill', curFill);
        }
        if (!t.hasAttribute('data-original-stroke')) {
          const curStroke = t.getAttribute('stroke') || '';
          if (curStroke) t.setAttribute('data-original-stroke', curStroke);
        }

        // Obtener color base y oscurecerlo
        const baseColor = getFillOfElement(t) || '#666';
        const darkColor = darkenColor(baseColor, 0.25);
        
        // Aplicar color más oscuro
        t.setAttribute('fill', darkColor);
        t.setAttribute('stroke', darkenColor(baseColor, 0.4));
        t.setAttribute('stroke-width', '3');
        t.style.transition = 'all 0.3s ease';
        t.style.filter = 'brightness(0.85) saturate(1.1)';

        // Crear halo más visible
        createHaloForElement(t, baseColor);
      });
    });
  };

  // Resaltar zona individual (resaltado sutil como antes)
  const highlightByNames = (svgDoc, departamentoName, subzonaName) => {
    if (!svgDoc) return;
    clearAllHighlights(svgDoc);
    if (!departamentoName && !subzonaName) return;

    const target = subzonaName || departamentoName;
    const candidates = Array.from(svgDoc.querySelectorAll('path, rect, polygon, circle, ellipse, g'));
    const matches = [];

    candidates.forEach(el => {
      const id = getZoneIdFromElement(el);
      if (id && id.toLowerCase() === (target || '').toLowerCase()) matches.push(el);
    });

    if (matches.length === 0) {
      candidates.forEach(el => {
        const id = (getZoneIdFromElement(el) || '').toLowerCase();
        const content = (el.textContent || '').toLowerCase();
        const dataName = (el.getAttribute && (el.getAttribute('data-zona') || el.getAttribute('data-name') || el.getAttribute('data-departamento')) || '').toLowerCase();
        if (id.includes((target || '').toLowerCase()) || content.includes((target || '').toLowerCase()) || dataName.includes((target || '').toLowerCase())) {
          matches.push(el);
        }
      });
    }

    if (matches.length === 0 && departamentoName) {
      for (const key of Object.keys(MAPEO_ZONAS)) {
        if (MAPEO_ZONAS[key].toLowerCase() === departamentoName.toLowerCase()) {
          const elByKey = svgDoc.querySelector(`#${CSS.escape(key)}`);
          if (elByKey) matches.push(elByKey);
        }
      }
    }

    if (matches.length === 0) return;

    matches.forEach(el => {
      el.classList.add('mapa-selected');
      let targets = [];
      if (el.tagName && el.tagName.toLowerCase() === 'g') {
        const children = el.querySelectorAll('path, rect, polygon, circle, ellipse');
        targets = children.length ? Array.from(children) : [el];
      } else {
        targets = [el];
      }

      const baseColor = getFillOfElement(el) || '#666';

      targets.forEach(t => {
        if (!t.hasAttribute('data-original-fill')) {
          const curFill = t.getAttribute('fill') || '';
          if (curFill) t.setAttribute('data-original-fill', curFill);
        }
        if (!t.hasAttribute('data-original-stroke')) {
          const curStroke = t.getAttribute('stroke') || '';
          if (curStroke) t.setAttribute('data-original-stroke', curStroke);
        }

        if (t.hasAttribute('data-original-fill')) {
          const origFill = t.getAttribute('data-original-fill');
          if (origFill && origFill !== 'none') t.setAttribute('fill', origFill);
        }

        t.setAttribute('stroke', baseColor);
        t.setAttribute('stroke-width', '2');
        t.style.transition = 'all 0.2s ease';
        t.style.filter = 'brightness(0.92) saturate(1.06)';

        createHaloForElement(t, baseColor);
      });

      if (el.parentNode && el.tagName && el.tagName.toLowerCase() === 'g') {
        try {
          el.parentNode.appendChild(el);
        } catch (err) {
          // ignore
        }
      }
    });
  };

  const handleLoad = (e) => {
    const svgDoc = e.target.contentDocument;
    if (!svgDoc) return console.warn('No se pudo acceder al contenido del SVG.');
    svgRef.current = svgDoc;

    const all = svgDoc.querySelectorAll('path, rect, polygon, circle, ellipse');
    all.forEach(el => {
      if (!el.hasAttribute('data-original-fill')) {
        const f = el.getAttribute('fill') || '';
        if (f && f !== 'none') el.setAttribute('data-original-fill', f);
        else {
          try {
            const cs = window.getComputedStyle(el);
            if (cs && cs.fill && cs.fill !== 'none' && cs.fill !== '') el.setAttribute('data-original-fill', cs.fill);
          } catch (err) { /* ignore */ }
        }
      }
    });

    const zonas = svgDoc.querySelectorAll('path, rect, polygon, circle, ellipse, g');
    zonas.forEach(zona => {
      if (!zona) return;
      zona.style.cursor = 'pointer';

      zona.addEventListener('mouseenter', () => {
        if (!zona.classList.contains('mapa-selected') && !zona.classList.contains('mapa-departamento-selected')) {
          zona.style.filter = 'brightness(0.9)';
        }
      });
      zona.addEventListener('mouseleave', () => {
        if (!zona.classList.contains('mapa-selected') && !zona.classList.contains('mapa-departamento-selected')) {
          zona.style.filter = '';
        }
      });

      zona.addEventListener('click', (ev) => {
        ev.stopPropagation();
        let idZona = getZoneIdFromElement(zona);
        if (!idZona) {
          let p = zona.parentElement;
          while (p && p.tagName && p.tagName.toLowerCase() !== 'svg') {
            const maybe = getZoneIdFromElement(p);
            if (maybe) { idZona = maybe; break; }
            p = p.parentElement;
          }
        }

        let nombreZona = (idZona && MAPEO_ZONAS[idZona]) || null;
        if (!nombreZona && idZona) {
          const low = idZona.toLowerCase();
          for (const key of Object.keys(MAPEO_ZONAS)) {
            if (key.toLowerCase().includes(low) || low.includes(key.toLowerCase())) {
              nombreZona = MAPEO_ZONAS[key];
              break;
            }
          }
        }

        if (!nombreZona) {
          const dataName = zona.getAttribute && (zona.getAttribute('data-zona') || zona.getAttribute('data-name') || zona.getAttribute('data-departamento'));
          nombreZona = dataName || idZona || (zona.textContent ? zona.textContent.trim() : 'unknown');
        }

        console.log('SVG click -> id/label:', idZona, ' => nombreZona:', nombreZona);
        onZonaClick(nombreZona);
      });
    });

    // Aplicar resaltado inicial
    if (resaltarDepartamento) {
      highlightDepartamento(svgDoc, resaltarDepartamento);
    } else if (departamentoActivo || zonaSeleccionada) {
      highlightByNames(svgDoc, departamentoActivo, zonaSeleccionada);
    }
  };

  useEffect(() => {
    if (!svgRef.current) return;
    
    if (resaltarDepartamento) {
      highlightDepartamento(svgRef.current, resaltarDepartamento);
    } else if (departamentoActivo || zonaSeleccionada) {
      highlightByNames(svgRef.current, departamentoActivo, zonaSeleccionada);
    } else {
      clearAllHighlights(svgRef.current);
    }
  }, [departamentoActivo, zonaSeleccionada, resaltarDepartamento]);

  return (
    <object
      id="svgMapa"
      type="image/svg+xml"
      data={`/${archivoSvg}`}
      className="mapa-svg"
      aria-label={`Mapa de ${archivoSvg}`}
      onLoad={handleLoad}
      style={{ width: '100%', height: '100%' }}
    >
      No se pudo cargar el mapa.
    </object>
  );
}

export default Mapa;
