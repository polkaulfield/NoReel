/** home_feed **/
const article_element = document.querySelector('article[role="presentation"]');
if (article_element){
    article_element.parentElement.remove();
}
/** END **/

/** reel_feed **/
const reel_icon_element = document.querySelector('a[href="/reels/"]');
if (reel_icon_element) {
    reel_icon_element.remove();
}
/** END **/

/** story_strip **/
const story_strip = document.querySelector('div[role="menu"]');
if (story_strip) {
    story_strip.remove();
}
/** END **/

/** audio_on **/
try{
document.querySelector('path[d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z"]').parentElement.parentElement.click();
} catch(e){}
/** END **/


/** search_feed **/
const explore_icon = document.querySelector('a[href="/explore/"]');
if (explore_icon){
    explore_icon.href = "https://www.instagram.com/explore/search/";

    var event_listner = function(event) {
        event.stopImmediatePropagation();
    };

    explore_icon.removeEventListener("click", event_listner);

    explore_icon.addEventListener("click", event_listner, true);

    const cancel_button = document.querySelector('div[class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x16n37ib x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh xl56j7k"]');
    if (cancel_button){
        cancel_button.remove();
    }
} 
/** END **/

/** use_followed_feed **/
const home_icon = document.querySelector('a[href="/"]');
if (home_icon){
    home_icon.href = "/?variant=following";

    var event_listner = function(event) {
        event.stopImmediatePropagation();
    };

    home_icon.removeEventListener("click", event_listner);

    home_icon.addEventListener("click", event_listner, true);
}
const back_to_home = document.querySelector('div[class="x78zum5"]');
if (back_to_home) {
    var event_listner = function(event) {
        window.location.href = "/?variant=following";
        event.stopImmediatePropagation();
    };

    back_to_home.removeEventListener("click", event_listner);

    back_to_home.addEventListener("click", event_listner, true);
}
/** END **/

/** ALWAYS_EXECUTE **/
const use_app_banner = document.querySelector('div[class="_acc8 _abpk"]');
if (use_app_banner) {
    use_app_banner.remove();
}

const settings_icon = document.querySelector('a[href="/accounts/settings/"]');
if (settings_icon){
    Android.setSettingsMenuButton();
} else {
    Android.deleteSettingsMenuButton();
}
/** END **/

