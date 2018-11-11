import { AppConfig } from './app.config';
export class ManagementConfig{
 public static AddUser: string =`${AppConfig.ApiRoot}/add`
 public static GetAllTestUrl: string = `${AppConfig.ApiRoot}/user/getAllTest`
}