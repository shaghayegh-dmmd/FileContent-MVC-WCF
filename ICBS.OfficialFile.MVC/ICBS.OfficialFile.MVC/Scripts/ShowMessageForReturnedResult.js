﻿/*
   This generated by Farhad Yazdi for Show message after any activity done
*/
var ManualMessage;
function ShowMessageForResult(returnedResult) {
    if (returnedResult == '1') {
        ShowDialog("توجه", "عملیات با موفقیت انجام شد.", "DialogInformation", ["تایید"], DialogCloseNone);
    }
    if (returnedResult == '-1') {
        ShowDialog("اخطار", "عملیات با مشکل مواجه شده و درست صورت نگرفت.", "DialogError", ["تایید"], DialogCloseNone);
    }
    if (returnedResult == '-2') {
        ShowDialog("اخطار", "هیچ اطلاعاتی وارد نشده.", "DialogError", ["تایید"], DialogCloseNone);
    }
    if (returnedResult == '-3') {
        ShowDialog("اخطار", "برخی از اطلاعات با خطا وارد شده.", "DialogError", ["تایید"], DialogCloseNone);
    }
    if (returnedResult == '-4') {
        ShowDialog("اخطار", "هیچ فایلی انتخاب نشده.", "DialogError", ["تایید"], DialogCloseNone);
    }
    if (returnedResult == '-100') {
        ShowDialog("اخطار", "اجازه ویرایش کردن برای این بخش از سیستم وجود ندارد ، با مدیر سیستم تماس بگیرید.", "DialogError", ["تایید"], DialogCloseNone);
    }
    if (returnedResult == '-1000') {
        ShowDialog("اخطار", "شما مجوز لازم برای انجام این عملیات را ندارید ، با مدیر سیستم تماس بگیرید.", "DialogError", ["تایید"], DialogCloseNone);
    }
    if (returnedResult == '-11') {
        ShowDialog("اخطار", " کاربر گرامی مانده بدهی اولیه اشتباه می باشد ", "DialogError", ["تایید"], DialogCloseNone);
    }
    if (returnedResult == '-12') {
        ShowDialog("اخطار", " کاربر گرامی مانده بدهی اولیه مطابق با سند رهنی اشتباه می باشد ", "DialogError", ["تایید"], DialogCloseNone);
    }
    if (returnedResult == '-13') {
        ShowDialog("اخطار", " این هزینه با درخواستی مرتبط است ، اجازه ویرایش کردن وجود ندارد. ", "DialogError", ["تایید"], DialogCloseNone);
    }

    if (returnedResult == '-65') {
        ShowDialog("اخطار", "کلمه عبور به درستی تکرار نشده.", "DialogError", ["تایید"], DialogCloseNone);
    }
    if (returnedResult == '-66') {
        ShowDialog("اخطار", "کلمه عبور فعلی اشتباه است .", "DialogError", ["تایید"], DialogCloseNone);
    }

    if (returnedResult == '-111') {
        ShowDialog("اخطار", ManualMessage, "DialogInformation", ["تایید"], DialogCloseNone);
    }
}
