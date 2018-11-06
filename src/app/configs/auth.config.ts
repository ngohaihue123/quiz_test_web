import { AppConfig } from "./app.config";
export class AuthConfig {
    public static LoginUrl : string = `${AppConfig.ApiRoot}/auth/login`;
    public static ResetPasswordUrl : string = `${AppConfig.ApiRoot}/admin/password/reset`;
}