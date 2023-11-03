// src/core/ViewerWrapper.ts

import * as Cesium from "cesium";

export class ViewerWrapper {
  private viewer: Cesium.Viewer;

  constructor(
    containerID: Element | string,
    options?: Cesium.Viewer.ConstructorOptions,
  ) {
    this.viewer = new Cesium.Viewer(containerID, options);
  }

  // 封装Cesium Viewer的flyTo方法
  flyTo(
    target:
      | Cesium.Entity
      | Cesium.Entity[]
      | Cesium.EntityCollection
      | Cesium.DataSource
      | Cesium.ImageryLayer
      | Cesium.Cesium3DTileset
      | Cesium.TimeDynamicPointCloud
      | Promise<
          | Cesium.Entity
          | Cesium.Entity[]
          | Cesium.EntityCollection
          | Cesium.DataSource
          | Cesium.ImageryLayer
          | Cesium.Cesium3DTileset
          | Cesium.TimeDynamicPointCloud
          | Cesium.VoxelPrimitive
        >,
    options?: {
      duration?: number;
      maximumHeight?: number;
      offset?: Cesium.HeadingPitchRange;
    },
  ): Promise<boolean> {
    return this.viewer.flyTo(target, options);
  }

  // 封装Cesium Viewer的zoomTo方法
  zoomTo(
    target:
      | Cesium.Entity
      | Cesium.Entity[]
      | Cesium.EntityCollection
      | Cesium.DataSource
      | Cesium.ImageryLayer
      | Cesium.Cesium3DTileset
      | Cesium.TimeDynamicPointCloud
      | Promise<
          | Cesium.Entity
          | Cesium.Entity[]
          | Cesium.EntityCollection
          | Cesium.DataSource
          | Cesium.ImageryLayer
          | Cesium.Cesium3DTileset
          | Cesium.TimeDynamicPointCloud
          | Cesium.VoxelPrimitive
        >,
    offset?: Cesium.HeadingPitchRange,
  ): Promise<boolean> {
    return this.viewer.zoomTo(target, offset);
  }

  // 获取原始的Cesium Viewer对象
  getCesiumViewer(): Cesium.Viewer {
    return this.viewer;
  }
}

export default ViewerWrapper;
