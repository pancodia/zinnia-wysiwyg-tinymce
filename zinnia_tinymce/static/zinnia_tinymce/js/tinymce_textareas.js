/*
* @Author: panc25
* @Date:   2018-09-04 15:52:11
* @Last Modified by:   panc25
* @Last Modified time: 2018-09-04 16:15:44
*/

tinyMCE.init({
    selector: "textarea",
    plugins: "contextmenu,directionality,fullscreen,paste,preview,searchreplace,spellchecker,visualchars,wordcount",
    paste_auto_cleanup_on_paste : true,
    file_browser_callback : "mce_filebrowser"
});
