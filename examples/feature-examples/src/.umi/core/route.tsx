// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import routeProps from './routeProps';

if (process.env.NODE_ENV === 'development') {
  Object.entries(routeProps).forEach(([key, value]) => {
    const internalProps = ['path', 'id', 'parentId', 'isLayout', 'isWrapper', 'layout', 'clientLoader'];
    Object.keys(value).forEach((prop) => {
      if (internalProps.includes(prop)) {
        throw new Error(
          `[UmiJS] route '${key}' should not have '${prop}' prop, please remove this property in 'routeProps'.`
        )
      }
    })
  })
}

import React from 'react';

export async function getRoutes() {
  const routes = {"extensions/group/nodes/custom-group/index":{"path":"extensions/group/nodes/custom-group","id":"extensions/group/nodes/custom-group/index","parentId":"@@/global-layout"},"extensions/group/nodes/sub-process/index":{"path":"extensions/group/nodes/sub-process","id":"extensions/group/nodes/sub-process/index","parentId":"@@/global-layout"},"extensions/dnd-panel/nodes/start":{"path":"extensions/dnd-panel/nodes/start","id":"extensions/dnd-panel/nodes/start","parentId":"@@/global-layout"},"extensions/dnd-panel/nodes/end":{"path":"extensions/dnd-panel/nodes/end","id":"extensions/dnd-panel/nodes/end","parentId":"@@/global-layout"},"extensions/group/nodes/index":{"path":"extensions/group/nodes","id":"extensions/group/nodes/index","parentId":"@@/global-layout"},"extensions/dnd-panel/index":{"path":"extensions/dnd-panel","id":"extensions/dnd-panel/index","parentId":"@@/global-layout"},"nodes/custom/Ellipse/index":{"path":"nodes/custom/Ellipse","id":"nodes/custom/Ellipse/index","parentId":"@@/global-layout"},"extensions/BPMN/svgIcons":{"path":"extensions/BPMN/svgIcons","id":"extensions/BPMN/svgIcons","parentId":"@@/global-layout"},"extensions/Control/index":{"path":"extensions/Control","id":"extensions/Control/index","parentId":"@@/global-layout"},"nodes/custom/Image/Cloud":{"path":"nodes/custom/Image/Cloud","id":"nodes/custom/Image/Cloud","parentId":"@@/global-layout"},"nodes/custom/Image/index":{"path":"nodes/custom/Image","id":"nodes/custom/Image/index","parentId":"@@/global-layout"},"nodes/custom/Theme/index":{"path":"nodes/custom/Theme","id":"nodes/custom/Theme/index","parentId":"@@/global-layout"},"nodes/custom/Theme/theme":{"path":"nodes/custom/Theme/theme","id":"nodes/custom/Theme/theme","parentId":"@@/global-layout"},"nodes/custom/Html/index":{"path":"nodes/custom/Html","id":"nodes/custom/Html/index","parentId":"@@/global-layout"},"nodes/custom/Icon/index":{"path":"nodes/custom/Icon","id":"nodes/custom/Icon/index","parentId":"@@/global-layout"},"nodes/custom/Rect/index":{"path":"nodes/custom/Rect","id":"nodes/custom/Rect/index","parentId":"@@/global-layout"},"extensions/group/index":{"path":"extensions/group","id":"extensions/group/index","parentId":"@@/global-layout"},"graph/edges/connection":{"path":"graph/edges/connection","id":"graph/edges/connection","parentId":"@@/global-layout"},"nodes/custom/Html/data":{"path":"nodes/custom/Html/data","id":"nodes/custom/Html/data","parentId":"@@/global-layout"},"extensions/BPMN/index":{"path":"extensions/BPMN","id":"extensions/BPMN/index","parentId":"@@/global-layout"},"extensions/Menu/index":{"path":"extensions/Menu","id":"extensions/Menu/index","parentId":"@@/global-layout"},"graph/edges/animation":{"path":"graph/edges/animation","id":"graph/edges/animation","parentId":"@@/global-layout"},"extensions/BPMN/tips":{"path":"extensions/BPMN/tips","id":"extensions/BPMN/tips","parentId":"@@/global-layout"},"extensions/BPMN/util":{"path":"extensions/BPMN/util","id":"extensions/BPMN/util","parentId":"@@/global-layout"},"graph/nodes/combine":{"path":"graph/nodes/combine","id":"graph/nodes/combine","parentId":"@@/global-layout"},"graph/nodes/square":{"path":"graph/nodes/square","id":"graph/nodes/square","parentId":"@@/global-layout"},"nodes/native/index":{"path":"nodes/native","id":"nodes/native/index","parentId":"@@/global-layout"},"graph/edges/index":{"path":"graph/edges","id":"graph/edges/index","parentId":"@@/global-layout"},"graph/nodes/index":{"path":"graph/nodes","id":"graph/nodes/index","parentId":"@@/global-layout"},"graph/nodes/star":{"path":"graph/nodes/star","id":"graph/nodes/star","parentId":"@@/global-layout"},"graph/nodes/user":{"path":"graph/nodes/user","id":"graph/nodes/user","parentId":"@@/global-layout"},"graph/nodes/uml":{"path":"graph/nodes/uml","id":"graph/nodes/uml","parentId":"@@/global-layout"},"graph/index":{"path":"graph","id":"graph/index","parentId":"@@/global-layout"},"@@/global-layout":{"id":"@@/global-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'extensions/group/nodes/custom-group/index': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__group__nodes__custom-group__index" */'../../../src/pages/extensions/group/nodes/custom-group/index.ts')),
'extensions/group/nodes/sub-process/index': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__group__nodes__sub-process__index" */'../../../src/pages/extensions/group/nodes/sub-process/index.ts')),
'extensions/dnd-panel/nodes/start': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__dnd-panel__nodes__start" */'../../../src/pages/extensions/dnd-panel/nodes/start.ts')),
'extensions/dnd-panel/nodes/end': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__dnd-panel__nodes__end" */'../../../src/pages/extensions/dnd-panel/nodes/end.ts')),
'extensions/group/nodes/index': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__group__nodes__index" */'../../../src/pages/extensions/group/nodes/index.ts')),
'extensions/dnd-panel/index': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__dnd-panel__index" */'../../../src/pages/extensions/dnd-panel/index.tsx')),
'nodes/custom/Ellipse/index': React.lazy(() => import(/* webpackChunkName: "src__pages__nodes__custom__Ellipse__index" */'../../../src/pages/nodes/custom/Ellipse/index.tsx')),
'extensions/BPMN/svgIcons': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__BPMN__svgIcons" */'../../../src/pages/extensions/BPMN/svgIcons.ts')),
'extensions/Control/index': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__Control__index" */'../../../src/pages/extensions/Control/index.tsx')),
'nodes/custom/Image/Cloud': React.lazy(() => import(/* webpackChunkName: "src__pages__nodes__custom__Image__Cloud" */'../../../src/pages/nodes/custom/Image/Cloud.tsx')),
'nodes/custom/Image/index': React.lazy(() => import(/* webpackChunkName: "src__pages__nodes__custom__Image__index" */'../../../src/pages/nodes/custom/Image/index.tsx')),
'nodes/custom/Theme/index': React.lazy(() => import(/* webpackChunkName: "src__pages__nodes__custom__Theme__index" */'../../../src/pages/nodes/custom/Theme/index.tsx')),
'nodes/custom/Theme/theme': React.lazy(() => import(/* webpackChunkName: "src__pages__nodes__custom__Theme__theme" */'../../../src/pages/nodes/custom/Theme/theme.ts')),
'nodes/custom/Html/index': React.lazy(() => import(/* webpackChunkName: "src__pages__nodes__custom__Html__index" */'../../../src/pages/nodes/custom/Html/index.tsx')),
'nodes/custom/Icon/index': React.lazy(() => import(/* webpackChunkName: "src__pages__nodes__custom__Icon__index" */'../../../src/pages/nodes/custom/Icon/index.tsx')),
'nodes/custom/Rect/index': React.lazy(() => import(/* webpackChunkName: "src__pages__nodes__custom__Rect__index" */'../../../src/pages/nodes/custom/Rect/index.tsx')),
'extensions/group/index': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__group__index" */'../../../src/pages/extensions/group/index.tsx')),
'graph/edges/connection': React.lazy(() => import(/* webpackChunkName: "src__pages__graph__edges__connection" */'../../../src/pages/graph/edges/connection.ts')),
'nodes/custom/Html/data': React.lazy(() => import(/* webpackChunkName: "src__pages__nodes__custom__Html__data" */'../../../src/pages/nodes/custom/Html/data.ts')),
'extensions/BPMN/index': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__BPMN__index" */'../../../src/pages/extensions/BPMN/index.tsx')),
'extensions/Menu/index': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__Menu__index" */'../../../src/pages/extensions/Menu/index.tsx')),
'graph/edges/animation': React.lazy(() => import(/* webpackChunkName: "src__pages__graph__edges__animation" */'../../../src/pages/graph/edges/animation.ts')),
'extensions/BPMN/tips': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__BPMN__tips" */'../../../src/pages/extensions/BPMN/tips.ts')),
'extensions/BPMN/util': React.lazy(() => import(/* webpackChunkName: "src__pages__extensions__BPMN__util" */'../../../src/pages/extensions/BPMN/util.ts')),
'graph/nodes/combine': React.lazy(() => import(/* webpackChunkName: "src__pages__graph__nodes__combine" */'../../../src/pages/graph/nodes/combine.ts')),
'graph/nodes/square': React.lazy(() => import(/* webpackChunkName: "src__pages__graph__nodes__square" */'../../../src/pages/graph/nodes/square.ts')),
'nodes/native/index': React.lazy(() => import(/* webpackChunkName: "src__pages__nodes__native__index" */'../../../src/pages/nodes/native/index.tsx')),
'graph/edges/index': React.lazy(() => import(/* webpackChunkName: "src__pages__graph__edges__index" */'../../../src/pages/graph/edges/index.ts')),
'graph/nodes/index': React.lazy(() => import(/* webpackChunkName: "src__pages__graph__nodes__index" */'../../../src/pages/graph/nodes/index.ts')),
'graph/nodes/star': React.lazy(() => import(/* webpackChunkName: "src__pages__graph__nodes__star" */'../../../src/pages/graph/nodes/star.ts')),
'graph/nodes/user': React.lazy(() => import(/* webpackChunkName: "src__pages__graph__nodes__user" */'../../../src/pages/graph/nodes/user.ts')),
'graph/nodes/uml': React.lazy(() => import(/* webpackChunkName: "src__pages__graph__nodes__uml" */'../../../src/pages/graph/nodes/uml.ts')),
'graph/index': React.lazy(() => import(/* webpackChunkName: "src__pages__graph__index" */'../../../src/pages/graph/index.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/Users/r0ger1tlearn/WorkSpace/Github/DiDi/logicflow/examples/feature-examples/src/layouts/index.tsx')),
},
  };
}