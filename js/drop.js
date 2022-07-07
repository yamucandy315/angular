function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHtml = "";

    if(s1.value == 'veg'){
        var optionArray = ['idly|Idly','dosai|Dosai','poori|Poori','vegmeals'|'Vegmeals',
        'vegbriyani|Vegbriyani','crudrice|Crudrice','noodles|Noodles','non|Non','parotta|Parotta'];
    }
    else if(s1.value == 'non-veg'){
        var optionArray = ['kadaichicken with dosai|Kadaichicken with dosai','chicken noodles|Chicken noodles'
        ,'chicken parotta|Chicken parotta','chicken briyani|Chicken briyani','mutton briyani|Mutton briyani'
        ,'chicken rice|Chicken rice','chicken shawarma|Chicken shawarma','chicken roll|Chicken roll'
        ,'chicken meals|Chicken meals'];
    }
    for(var option in optionArray)
    {
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");
        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption);
    }
}