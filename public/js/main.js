const search_btn = document.getElementById("search_btn");
const Cityname = document.getElementById("Search_cityname");
const temp_real_values = document.getElementById("temp_real_values");
const temp_status = document.getElementById("temp_status");
const city_name = document.getElementById("city_name");

const hidedata = document.querySelector(".middle_layer_temp");




const getinfo = async(event) => {
    event.preventDefault();
    const cityvalue = Cityname.value;
    if (cityvalue === "") {
        city_name.innerHTML = `Enter the city name`;
        hidedata.classList.add("data_hide");
    } else {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=d8cdeb280bedcb3781bf92f0043c41bf`;
            const response = await fetch(url);
            const objdata = await response.json();
            const arrdata = [objdata];
            console.log(objdata);

            temp_real_values.innerHTML = arrdata[0].main.temp;
            // temp_status.innerHTML = arrdata[0].weather[0].main;
            city_name.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`;

            const tempStatus = arrdata[0].weather[0].main;

            if (tempStatus === "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:rgb(252, 252, 103);'></i>";
            } else if (tempStatus === "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            } else if (tempStatus === "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }


            hidedata.classList.remove("data_hide");


        } catch {
            city_name.innerHTML = `Pls enter correctly`;
            hidedata.classList.add("data_hide");
        }
    }

}
search_btn.addEventListener("click", getinfo);