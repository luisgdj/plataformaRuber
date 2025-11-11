// src/components/Mapa.js
import React, { useEffect, useRef } from 'react';
import '../styles/Mapa.css';

function Mapa({ archivoSvg, onZonaClick, departamentoActivo, zonaSeleccionada }) {
  const svgRef = useRef(null);

  const MAPEO_ZONAS = {

    // PS2 - Oncología Radioterapica
    "layer1": "Radioterapia",
    "path9335": "Radioterapia",
    "estructuraRD": "Radioterapia",
    "path9342": "Acelerador lineal",
    "path9253": "Ciberknife",

    // PS2 - Unidad Gamma
    "path9344": "GammaKnife",

    // PS2 - Medicina Nuclear
    "medicinaNuclear": "Medicina nuclear",
    "path9283": "Medicina nuclear",
    "path9132": "Medicina nuclear",
    "path9276": "Gamma cámara",
    "path4972": "Mamografía",
    "path4968": "PET-TAC"

    // PS1 - Diagnostico por Imagen
    
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

  // obtiene fill real (atributo o computed style) buscando en hijos si hace falta
  function getFillOfElement(el) {
    if (!el) return '#666';
    // data-original-fill preferible
    const orig = el.getAttribute && el.getAttribute('data-original-fill');
    if (orig) return orig;

    const f = el.getAttribute && el.getAttribute('fill');
    if (f && f !== 'none') return f;

    try {
      const cs = window.getComputedStyle(el);
      if (cs && cs.fill && cs.fill !== 'none' && cs.fill !== '') return cs.fill;
    } catch (e) { /* ignore */ }

    // buscar en hijos
    const child = el.querySelector && el.querySelector('path, rect, polygon, circle, ellipse');
    if (child) return getFillOfElement(child);

    return '#666';
  }

  // convertir #hex a rgba con alpha
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

  // limpia todo lo que añadimos (strokes, halos clonados, clases)
  function clearAllHighlights(svgDoc) {
    if (!svgDoc) return;
    const all = svgDoc.querySelectorAll('path, rect, polygon, circle, ellipse');
    all.forEach(el => {
      el.classList.remove('mapa-selected');
      // restaurar atributos originales si existen
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

    // remover clones halo que creamos
    const halos = svgDoc.querySelectorAll('.mapa-halo');
    halos.forEach(h => h.parentNode && h.parentNode.removeChild(h));
  }

  // crea un halo (clon) y lo inserta DETRÁS del elemento original
  function createHaloForElement(el, baseColor) {
    if (!el || !el.parentNode) return null;
    try {
      // clonamos el nodo y lo dejamos sin fill, solo stroke ancho semitransparente
      const clone = el.cloneNode(true);
      clone.classList.add('mapa-halo');
      // forzar que el halo no capture eventos
      clone.setAttribute('pointer-events', 'none');

      // quitar fills y dejar stroke ancho y semitransparente
      clone.setAttribute('fill', 'none');
      clone.setAttribute('stroke', baseColor);
      clone.setAttribute('stroke-opacity', '0.25');
      // hacer el halo más ancho que el stroke real
      const origStrokeWidth = parseFloat(el.getAttribute('stroke-width') || 0);
      const haloWidth = Math.max(origStrokeWidth * 2.5, 12); // bastante visible
      clone.setAttribute('stroke-width', haloWidth.toString());
      // colocar clone justo antes del original (esto lo deja detrás)
      el.parentNode.insertBefore(clone, el);
      return clone;
    } catch (err) {
      console.warn('No se pudo crear halo', err);
      return null;
    }
  }

  // aplica resaltado (sin filtros problemáticos): pone stroke en elementos visibles y crea halo clones
  const highlightByNames = (svgDoc, departamentoName, subzonaName) => {
    if (!svgDoc) return;
    clearAllHighlights(svgDoc);
    if (!departamentoName && !subzonaName) return;

    const target = subzonaName || departamentoName;
    const candidates = Array.from(svgDoc.querySelectorAll('path, rect, polygon, circle, ellipse, g'));
    const matches = [];

    // 1) búsqueda exacta por id/label/data
    candidates.forEach(el => {
      const id = getZoneIdFromElement(el);
      if (id && id.toLowerCase() === (target || '').toLowerCase()) matches.push(el);
    });

    // 2) búsqueda por includes y atributos data-*
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

    // 3) usar MAPEO_ZONAS como último recurso (buscar keys que apunten al nombre)
    if (matches.length === 0 && departamentoName) {
      for (const key of Object.keys(MAPEO_ZONAS)) {
        if (MAPEO_ZONAS[key].toLowerCase() === departamentoName.toLowerCase()) {
          const elByKey = svgDoc.querySelector(`#${CSS.escape(key)}`);
          if (elByKey) matches.push(elByKey);
        }
      }
    }

    if (matches.length === 0) return;

    // aplicar estilos: si es <g> aplicamos a sus hijos vectoriales (no al g)
    matches.forEach(el => {
      el.classList.add('mapa-selected');
      let targets = [];
      if (el.tagName && el.tagName.toLowerCase() === 'g') {
        const children = el.querySelectorAll('path, rect, polygon, circle, ellipse');
        targets = children.length ? Array.from(children) : [el];
      } else {
        targets = [el];
      }

      // obtener color base a partir del elemento o sus hijos
      const baseColor = getFillOfElement(el) || '#666';
      const haloColor = hexToRgba(baseColor, 0.28);

      targets.forEach(t => {
        // guardar originales si no existen
        if (!t.hasAttribute('data-original-fill')) {
          const curFill = t.getAttribute('fill') || '';
          if (curFill) t.setAttribute('data-original-fill', curFill);
        }
        if (!t.hasAttribute('data-original-stroke')) {
          const curStroke = t.getAttribute('stroke') || '';
          if (curStroke) t.setAttribute('data-original-stroke', curStroke);
        }
        if (!t.hasAttribute('data-original-stroke-width')) {
          const curWidth = t.getAttribute('stroke-width') || '';
          if (curWidth) t.setAttribute('data-original-stroke-width', curWidth);
        }

        // asegurar que el fill original se mantiene (evita "desaparición")
        if (t.hasAttribute('data-original-fill')) {
          const origFill = t.getAttribute('data-original-fill');
          if (origFill && origFill !== 'none') t.setAttribute('fill', origFill);
        }

        // aplicar stroke visible y sutil
        t.setAttribute('stroke', baseColor);
        t.setAttribute('stroke-width', '2'); // contorno fino
        t.style.transition = 'all 0.2s ease';
        t.style.filter = 'brightness(0.92) saturate(1.06)'; // ligero ajuste visual

        // crear halo DETRÁS (clon semitransparente)
        createHaloForElement(t, baseColor);
      });

      // opcional: intentar subir visualmente el grupo al final del padre para que no quede oculto
      // (esto no debería ocultar capas si usamos halos detrás de los elementos)
      if (el.parentNode && el.tagName && el.tagName.toLowerCase() === 'g') {
        try {
          el.parentNode.appendChild(el); // lo lleva al final, para que se pinte encima
        } catch (err) {
          // ignore
        }
      }
    });
  };

  // Al cargar el SVG: guardar fills originales y añadir listeners
  const handleLoad = (e) => {
    const svgDoc = e.target.contentDocument;
    if (!svgDoc) return console.warn('No se pudo acceder al contenido del SVG.');
    svgRef.current = svgDoc;

    // guardar fills originales en elementos vectoriales
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

    // listeners para hover / click
    const zonas = svgDoc.querySelectorAll('path, rect, polygon, circle, ellipse, g');
    zonas.forEach(zona => {
      if (!zona) return;
      zona.style.cursor = 'pointer';

      zona.addEventListener('mouseenter', () => {
        if (!zona.classList.contains('mapa-selected')) zona.style.filter = 'brightness(0.9)';
      });
      zona.addEventListener('mouseleave', () => {
        if (!zona.classList.contains('mapa-selected')) zona.style.filter = '';
      });

      zona.addEventListener('click', (ev) => {
        ev.stopPropagation();
        // resolver id/label
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

    // aplicar resaltado inicial si hay algo seleccionado
    if (departamentoActivo || zonaSeleccionada) {
      highlightByNames(svgDoc, departamentoActivo, zonaSeleccionada);
    }
  };

  // actualizar cuando cambie la selección desde App/Sidebar
  useEffect(() => {
    if (!svgRef.current) return;
    highlightByNames(svgRef.current, departamentoActivo, zonaSeleccionada);
  }, [departamentoActivo, zonaSeleccionada]);

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
