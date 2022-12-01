// Use of switch statement to acquire meaning of days of the week

/* The App allows you to input an integer 1 >= x <= 7, which each represent the day of the week
and its meaning as the output. the default breaks of the switch statement if the fed integer is x < 1 or
x > 7 */ 

var num1;
confirm('Due you want to know the meaning of days as per the Greeks?');
switch(num1 = parseInt(prompt('Please input day as a numerical i.e Sun=1'))){
    case 1:
        alert('Sunday, Greek as Day of sun = Hesus');
        break;
    case num1=2:
        alert('Monday, Day for the moon as per the Greeks');
        break;
    case num1=3:
        alert('Tuesday,Tiws-day, god of war');
        break;
    case num1=4:
        alert('Wednesday,Wodens-day, sky god');
        break;
    case num1=5:
        alert('Thursday, Thors-day, thunder god');
        break;
    case num1=6:
        alert('Friday, Frigg-day, Fertility');
        break;
    case num1=7:
        alert('Saturday, Saturns-day, Day os satan');
        break;
    default:
        alert('Please input a number between 1 & 7');
}