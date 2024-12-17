<template>
   <!-- Renderizo en dos partes, utilizo sytel que es para las formas e class para las clases que ya existen en tailwind. Intenté hacer todo en style no me funcionó -->
    <div :style="shapeStyle" :class="['w-24 h-24 mx-auto', colorShape]"></div>
  </template>
  
  <script>
  export default {
    props: ['isColor', 'isRounded', 'isAnimated'],
    computed: {
        //color definida para renderizar en template
        colorShape(){
            return this.isColor === 'custom-purple' ? 'bg-custom-purple' : 'bg-custom-purple-dark'
        },
        //foma definida para renderizar emn template
        shapeStyle() {
            
//   console.log({
//     borderRadius: this.isRounded ? '50%' : '0%',
//     transform: this.isAnimated ? 'translateX(200px)' : 'none',
//   });
  return {
    borderRadius: this.isRounded ? '50%' : '0%',
    transform: this.isAnimated ? 'translateX(150px)' : 'none',
    transition: 'transform 0.8s ease',
    width: '120px',
    height: '120px',
  };
}

    }
  };
  </script>
  
  <style />

  
  
    
