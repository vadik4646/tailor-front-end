export class ServerLinks {
  public static server = 'http://api.tailor.local/app_dev.php';

  public static registerSubmitPath = '/authentication/register';
  public static categoryListPath = '/category/list';

  public static register = ServerLinks.server + ServerLinks.registerSubmitPath;
  public static categoryList = ServerLinks.server + ServerLinks.categoryListPath;

}
