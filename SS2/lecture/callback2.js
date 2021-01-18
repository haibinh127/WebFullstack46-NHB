function doAsync(url, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open("Get", url);
    xhr.onload = () => onSuccess(xhr.responseText);
    xhr.onerror = () => onError(xhr.statusText);
    xhr.send();
}
//Usage:
doAsync("https://api.github.com/users/haibinh127", value => {
    console.log(value);
}, error => {
    console.log(error);
});