/*
* @Author: panc25
* @Date:   2018-09-04 15:52:11
* @Last Modified by:   panc25
* @Last Modified time: 2018-09-04 21:57:36
*/

tinyMCE.init({
    selector: 'textarea',
    theme: 'modern',
    plugins: 'link image preview codesample contextmenu table code lists wordcount',
    toolbar1: 'formatselect | bold italic underline | alignleft aligncenter alignright alignjustify \
               | bullist numlist | outdent indent | table | link image | codesample | preview code',
    contextmenu: 'formats | link image',
    menubar: false,
    inline: false,
    statusbar: true,
    width: 'auto',
    height: 300,
    // plugins: "contextmenu,directionality,fullscreen,paste,preview,searchreplace,spellchecker,visualchars,wordcount",
    // paste_auto_cleanup_on_paste : true,
    // file_browser_callback : "mce_filebrowser"
});
