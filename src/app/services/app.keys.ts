import { Injectable } from '@angular/core';

@Injectable()
export class Appkeys {
  public static readonly CURRENT_USER = "current_user";
  public static readonly USER_INFO = "user_info";
  public static readonly USER_PERMISSIONS = "user_permissions";
  public static readonly ACCESS_TOKEN = "access_token";
  public static readonly LANGUAGE = "language";
  public static readonly USER_MENU_DATA = "user_menu_data";
  public static readonly USER_DEALER_MENU = "user_dealer_menu";
  public static readonly SELECTED_DEALER_ID = "selected_dealer_id";
  public static readonly ADD = "add";
  public static readonly UPDATE = "update";
  public static readonly DELETE = "delete";

  public static readonly SELECTED_ORDER_ID = "selected_order_id";
}
