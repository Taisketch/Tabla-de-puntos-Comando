document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.node');
    const edges = document.querySelectorAll('.edge');
    let clickedNode = null;

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            const nodeId = node.dataset.nodeId;

            // If the same node is clicked, deselect it
            if (clickedNode === node) {
                resetSelection();
                clickedNode = null;
                return;
            }

            // Reset previous selection
            resetSelection();

            // Highlight the clicked node
            node.classList.add('clicked');
            clickedNode = node;

            // Highlight connected edges
            edges.forEach(edge => {
                const connectedNodes = edge.dataset.nodes.split(',');
                if (connectedNodes.includes(nodeId)) {
                    edge.classList.add('highlighted');
                }
            });
        });
    });

    function resetSelection() {
        nodes.forEach(n => n.classList.remove('clicked'));
        edges.forEach(e => e.classList.remove('highlighted'));
    }
});
