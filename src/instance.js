function getInstanceJs(parentClass, scriptInterface, addonTriggers, C3) {
  return class extends parentClass {
    constructor(inst, properties) {
      super(inst);

      if (properties) {
      }
    }

    SaveToJson() {
      return {
        // data to be saved for savegames
      };
    }

    LoadFromJson(o) {
      // load state for savegames
    }

    _SetFOV(fovDegrees) {
      const fov = C3.toRadians(fovDegrees);
      const canvasManager = this._runtime.GetCanvasManager();
      const renderer = this._runtime.GetRenderer();
      const layoutManager = this._runtime.GetLayoutManager();
      renderer.SetFovY(fov);
      canvasManager.UpdateDefaultProjectionMatrix();
      layoutManager.SetAllLayerProjectionChanged();
      layoutManager.SetAllLayerMVChanged();
      this._runtime.UpdateRender();
    }
    _GetFOV() {
      return C3.toDegrees(this._runtime.GetRenderer().GetFovY());
    }
  };
}
