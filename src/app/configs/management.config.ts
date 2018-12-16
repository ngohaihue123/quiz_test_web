import { AppConfig } from "./app.config";
export class ManagementConfig {


    public static GetMessagesUrl: string = `${AppConfig.ApiRoot}/admin/messages`;
    public static GetMessageByIdUrl: string = `${AppConfig.ApiRoot}/admin/message`;
    public static CancelMessageByIdUrl: string = `${AppConfig.ApiRoot}/admin/message/cancel`;
    public static SaveMessageUrl: string = `${AppConfig.ApiRoot}/admin/message`;
    public static DeleteMessageByIdUrl: string = `${AppConfig.ApiRoot}/admin/message/delete`;

    public static GetDialogsUrl: string = `${AppConfig.ApiRoot}/admin/dialogs`;
    public static GetDialogsByValueUrl: string = `${AppConfig.ApiRoot}/admin/dialogs/search`;
    public static GetAllDialogsUrl: string = `${AppConfig.ApiRoot}/admin/alldialogs`;
    public static GetDialogByIdUrl: string = `${AppConfig.ApiRoot}/admin/dialog`;
    public static SaveDialogUrl: string = `${AppConfig.ApiRoot}/admin/dialog`;
    public static DeleteDialogByIdUrl: string = `${AppConfig.ApiRoot}/admin/dialog/delete`;

    public static SaveIntentUrl: string = `${AppConfig.ApiRoot}/admin/intent`;
    public static GetIntentsUrl: string = `${AppConfig.ApiRoot}/admin/intents`;
    public static GetDeepIntentById: string = `${AppConfig.ApiRoot}/admin/intents/getById`;
    public static GetIntentInputByContent: string = `${AppConfig.ApiRoot}/admin/intents/inputs/getByContent`;
    public static DeleteIntentByIdUrl: string = `${AppConfig.ApiRoot}/admin/intent/delete`;
    public static GetAllFieldInIntentUrl: string = `${AppConfig.ApiRoot}/admin/intent/allField`;

    public static GetPromotionsUrl: string = `${AppConfig.ApiRoot}/admin/promotions`;
    public static GetPromotionByIdUrl: string = `${AppConfig.ApiRoot}/admin/promotions/get`;
    public static UpdatePromotionByIdUrl: string = `${AppConfig.ApiRoot}/admin/promotions/update`;
    public static GetPromotionCardByIdUrl: string = `${AppConfig.ApiRoot}/admin/promotions/getCardById`;

    public static UploadFileUrl: string = `${AppConfig.ApiRoot}/file/upload`;
    public static ReadFileUrl: string = `${AppConfig.ApiRoot}/admin/file/read`;
    public static UploadMultipleFilesUrl: string = `${AppConfig.ApiRoot}/admin/file/upload/multiple`;

    public static SpamPromotionQuick: string = `${AppConfig.ApiRoot}/admin/promotions/spamQuick`;
    public static SpamPromotionSlow: string = `${AppConfig.ApiRoot}/admin/promotions/spamSlow`;
    public static SpamPromotionUrl: string = `${AppConfig.ApiRoot}/admin/promotions/spam`;
    public static GetCurrentUsersByProviderIdUrl: string = `${AppConfig.ApiRoot}/admin/promotions/getCurrentCustomers`;

    public static GetStatisticScanAndGetCodeTimesUrl: string = `${AppConfig.ApiRoot}/admin/statistics/scanAndGetCodeTimes`;
    public static GetStatisticNumberNewUsersUrl: string = `${AppConfig.ApiRoot}/admin/statistics/numberNewUsers`;
    public static GetStatisticTotalUser: string = `${AppConfig.ApiRoot}/admin/statistics/totalUser`;
    public static GetStatisticLinkRef: string = `${AppConfig.ApiRoot}/admin/statistics/linkRef`;

    // Context
    public static GetAllContextsUrl: string = `${AppConfig.ApiRoot}/admin/allContexts`;
    public static GetContextsUrl: string = `${AppConfig.ApiRoot}/admin/contexts`;
    public static GetContextUrl: string = `${AppConfig.ApiRoot}/admin/context`;
    public static AddContextUrl: string = `${AppConfig.ApiRoot}/admin/context`;
    public static UpdateContextUrl: string = `${AppConfig.ApiRoot}/admin/context`;
    public static DeleteContextUrl: string = `${AppConfig.ApiRoot}/admin/context`;


    //Tag
    public static GetUserUrl: string = `${AppConfig.ApiRoot}/user/allUser`;
    public static GetUserByIdUrl: string = `${AppConfig.ApiRoot}/user`;
    public static UpdateUserURl: string = `${AppConfig.ApiRoot}/user/update`
    public static AddUserUrl: string = `${AppConfig.ApiRoot}/user/add`
    public static GetTestUrl: string = `${AppConfig.ApiRoot}/test/allTest`;
    public static UpdateTestURl: string = `${AppConfig.ApiRoot}/test/update`
    public static AddTestrUrl: string = `${AppConfig.ApiRoot}/test/add`;
    public static GetTestByIdUrl: string = `${AppConfig.ApiRoot}/test`;

}