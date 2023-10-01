// reusable effect.
gsap.registerEffect({
        name: "changeText",
        effect: (targets, config) => {
            let tl = gsap.timeline({delay:
             config.delay});
            tl.to(targets, {opacity: 0, duration: 
             config.duration / 2});
            tl.add(() => 
             targets[0].innerText = config.text);
            tl.to(targets, {opacity: 1, duration: config.duration});
             return tl;
        },
        defaults: {duration: 1},
        extendedTimeline: true
});

    var tl = gsap.timeline({repeat: -1});
     tl.changeText(".tswap", {text: 
        "COMPUTER SCIENCE STUDENT", delay: 2})
        .changeText(".tswap", {text: 
            "PROGAMMER", delay: 2})
        .changeText(".tswap", {text:
             "WEB DEVELOPER", delay: 2})
        .changeText(".tswap", {text: 
            "DATA ANALYST", delay: 2});


            gsap.effects.swapText(".subtext", {text: "NEW TEXT"});

