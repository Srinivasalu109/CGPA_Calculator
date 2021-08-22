import { semOne, semTwo, semThree, semFour, semFive, semSix, semSeven, semEight } from "./gpadetails"
export const getSemdetails = (semNumber) => {

    switch (parseInt(semNumber)) {
      
        case 1:
            return semOne;
        case 2:
    console.log(semTwo)

            return semTwo;
        case 3:
            return semThree;
        case 4:
            return semFour;
        case 5:
            return semFive;
        case 6:
            return semSix;
        case 7:
            return semSeven;
        case 8:
            return semEight;
            default:
                console.log("hello")
    }

}