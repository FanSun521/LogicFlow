const data = {
  nodes: [
    {
      id: '1',
      type: 'rect',
      x: 100,
      y: 100,
      text: '矩形1',
    },
    {
      id: '2',
      type: 'ellipse',
      x: 500,
      y: 100,
      text: '椭圆2',
    },
    {
      id: '3',
      type: 'polygon',
      x: 100,
      y: 250,
      text: '多边形3',
    },
    {
      id: '4',
      type: 'diamond',
      x: 300,
      y: 250,
      text: '菱形4',
    },
  ],
  edges: [
    {
      sourceNodeId: '1',
      targetNodeId: '2',
      startPoint: {
        x: 100,
        y: 60,
      },
      endPoint: {
        x: 500,
        y: 50,
      },
      type: 'polyline',
    },
    {
      sourceNodeId: '2',
      targetNodeId: '3',
      type: 'line',
    },
    // TODO
    {
      sourceNodeId: '2',
      targetNodeId: '4',
      type: 'bezier',
    },
  ],
};

export default data;
