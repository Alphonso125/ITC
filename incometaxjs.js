document.getElementById("ti").addEventListener("input", function() {
    let ti, basictax, brackettax, totaltax;

    incometax = 0;

    console.log("Passed here: " + incometax);

    ti = this.value * 1; 

    if (ti < 250000) {
        basictax = 0;
        brackettax = 0;
    } else if (ti >= 250000 && ti < 400000) {
        basictax = 0;
        brackettax = 0.2 * (ti - 250000);
    } else if (ti >= 400000 && ti < 800000) {
        basictax = 30000;
        brackettax = 0.25 * (ti - 400000);
    } else if (ti >= 800000 && ti < 2000000) {
        basictax = 0;
        brackettax = 130000 + (0.3 * (ti - 800000));
    } else if (ti >= 2000000 && ti < 8000000) {
        basictax = 0;
        brackettax = 490000 + (0.32 * (ti - 2000000));
    } else if (ti > 8000000) {
        basictax = 0;
        brackettax = 2410000 + (0.35 * (ti - 8000000));
    }
    totaltax = basictax + brackettax;
    document.getElementById("incometax").value = totaltax;
});
