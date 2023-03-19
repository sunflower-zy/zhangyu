export default class Input {
  static keyPressed: Record<string, boolean> = {};

  static isPressed(key: string) {
    return Input.keyPressed[key];
  }
}
