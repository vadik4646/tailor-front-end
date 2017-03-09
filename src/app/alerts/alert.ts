export class Alert {
  static showAnimationTime = 400;
  static hideAnimationTime = 300;
  static moveTopAnimationTime = 400;

  static lifeTime = 3000;
  static hideTime = Alert.lifeTime + Alert.hideAnimationTime;
  static removeTime = Alert.hideTime + Alert.moveTopAnimationTime;

  constructor(
    public type: string = 'success',
    public message: string = '',
    public state: string = 'initial'
  ) { }
}
