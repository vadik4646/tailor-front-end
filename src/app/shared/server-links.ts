export class ServerLinks {
  private static server = 'http://api.tailor.local/app_dev.php';
  private static registerSubmit = '/authentication/register';

  public static registerUrl() {
    return ServerLinks.server + ServerLinks.registerSubmit;
  }
}
