export const sendDataFormSingIn = (dataForm) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(this.readyState === 4 && this.status ===200){
            console.log(this.responseText);
            window.location.href="/AboutUser";
        }
    }
        request.open('POST','https://engbkj7yimca7.x.pipedream.net/', true );
        request.send(JSON.stringify(dataForm));
}