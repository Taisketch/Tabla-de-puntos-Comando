document.addEventListener('DOMContentLoaded', () => {
    const svgs = document.querySelectorAll('.graph-svg');

    svgs.forEach(svg => {
        const nodes = svg.querySelectorAll('.graph-node');
        const edges = svg.querySelectorAll('.graph-edge');

        nodes.forEach(node => {
            node.addEventListener('click', () => {
                // 1. Limpiar la selección en el SVG actual
                nodes.forEach(n => n.classList.remove('selected'));
                edges.forEach(e => e.classList.remove('highlight'));

                // 2. Resaltar el nodo seleccionado
                node.classList.add('selected');

                // 3. Resaltar las conexiones
                const nodeId = node.getAttribute('data-node-id');
                if (nodeId) {
                    edges.forEach(edge => {
                        const connectedNodes = edge.getAttribute('data-nodes');
                        if (connectedNodes && connectedNodes.split(',').includes(nodeId)) {
                            edge.classList.add('highlight');
                        }
                    });
                }
            });
        });
    });
});
