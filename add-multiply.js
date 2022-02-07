/* 

    chair = 3cft
    table = 10cft
    bed = 50cft

 */


    /* function woodCalculator(chairQuantity,tableQuantity,bedQuantity){

        const perChairWood = 3;
        const perTableWood = 10;
        const perBedWood = 50;

        const chairWoodQuantity = chairQuantity * perChairWood;
        const tableWoodQuantity = tableQuantity * perTableWood;
        const bedWoodQuantity = bedQuantity * perBedWood;

        const totalWoodQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

        return totalWoodQuantity;
    }

    const totalWoodNeed = woodCalculator(3,2,1);

    console.log(totalWoodNeed); */




    /* 
    
     perchair = 6cft/6
     pertable = 20cft/1
     perbed = 30cft/2
    
    
    */


     /* function woodCalculator(chairQuantity,tableQuantity,bedQuantity){

        const perChairWood = 6;
        const perTbaleWood = 20;
        const perBedWood = 30;

        const chairWoodQuantity = chairQuantity * perChairWood;
        const tableWoodQuantity = tableQuantity * perTbaleWood;
        const bedWoodQuantity = bedQuantity * perBedWood;

        const totalWoodQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

        return totalWoodQuantity;
     }

     const chairNeed = 6;

     const tableNeed = 1;
     const bedNeed =2;

    //  const totalWoodNeed = woodCalculator(6,1,2);

    //  console.log(totalWoodNeed)

    const totalWoodNeed = woodCalculator(chairNeed,tableNeed,bedNeed);

    console.log(totalWoodNeed) */







    /* 
        per jug = 5;
        per mug = 2;
        per plate = 3;
    */


     function glassCalculator(jugQuantity,mugQuantity,plateQuantity){

        const perJugGlass = 5;
        const perMugGlass = 2;
        const perPlateGlass = 3;

        const jugGlassQuantity = jugQuantity * perJugGlass;
        const mugGlassQuantity = mugQuantity * perMugGlass;
        const plateGlassQuantity = plateQuantity * perPlateGlass;

        const totalGlassQuantity = jugGlassQuantity+mugGlassQuantity+plateGlassQuantity;

        return totalGlassQuantity;
     }

     const jug = 3;
     const mug = 8;
     const plate = 10;

     const totalGlassNeed=glassCalculator(jug,mug,plate);

     console.log("total glass need",totalGlassNeed)