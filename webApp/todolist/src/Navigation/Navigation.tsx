import History from "./historyNavigation";

function NavigateTo(pathname : string) {
    History.push({
           pathname: pathname,
    });
    // window.location.reload()
}

export default NavigateTo