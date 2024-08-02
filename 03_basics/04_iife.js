// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTION`);
    
})();

((name) => {
    console.log(`DB CONNECTION TWO ${name}`);
    
})("vivek")