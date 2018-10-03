new Vue ({
  el: '#first-page-website',

  data: {

    pl:'PL',
    en:'EN',
    title:'Stefano - Sopot',
    facebook:'https://www.facebook.com/stefanopizza',
    google:'https://plus.google.com/+StefanoPlPizza',
    instagram:'https://www.instagram.com/pizzeria_stefano/',
    homepage:'Strona Domowa',
    menu:'Menu',
    order:'Zamów',
    contact:'Kontakt',
    promo:'Promocja',
    about:'Mała lokalna pizzeria otwarta od 2007 roku przez i dla smakoszy pizzy. Interes rodzinny, w którym pasja do dobrego jedzenia stała się sposobem na życie.',
    checkout:'Sprawdź nasze pizze!',
    buttonoffer:'Przejdź Do Menu'
  },

  methods: {
    //
    // add:function(inc){
    //   this.age += inc;
    // },
    //
    // subtract:function(dec){
    //   this.age -= dec;
    // },
    //
    // updateXY:function(event){
    //
    //   this.x = event.offsetX;
    //   this.y = event.offsetY;
    //   console.log(event);
    // }
    //
    // click:function(){
    //   alert('You clicked me')
    // },
    //
    // logName:function(){
    //
    //   console.log('you entered your name');
    // },
    //
    // logAge:function(){
    //
    //   console.log('you entered your age');
    // },
    //
    // addToA:function() {
    //   console.log('addToA');
    //   return this.a + this.age;
    //
    // },
    //
    // addToB:function() {
    //   console.log('addToB');
    //   return this.b + this.age;
    // }
    },

//     computed:{
//
//       addToA:function(){
//        console.log('addToA');
//        return this.a + this.age;
//
//      },
//
//      addToB:function() {
//        console.log('addToB');
//        return this.b + this.age;
//   }
// }
});


new Vue({
     el: '#menu-section',

     data: {

         menu:'Menu',
         basket:'Twój Koszyk',

     },

     methods: {

     }
   })

   new Vue({
        el: '#bottom-basket-header',

        data: {

            menu:'Menu',
            basket:'Twój Koszyk',

        },

        methods: {

        }
      })

new Vue({
     el: '#menu-offer-toggle-bar',

     data: {
         isShow: false,
         menu:'Menu',
         pizzastefano:'Pizze Stefano',
         message:'',
         price:'Mała: 19.99 PLN / Duża: 39.99 PLN',
         ingredients:'cheese, mushrooms, tomatoes, ham, rucole',
         selectcake:'Grubość ciasta: ',
         selectcakesize:'Wielkość : ',
     },

     methods: {
       myFilter: function(){
           this.isActive = !this.isActive;
         // some code to filter users
       }
     }
   })

   new Vue({
        el: '#menu-offer-toggle-bar2',

        data: {
            isShow: false,
            menu:'Menu',
            pizzastefano:'Pizze Deluxe',
            message:''
        },

        methods: {
          myFilter: function(){
              this.isActive = !this.isActive;
            // some code to filter users
          }
        }
      })


      new Vue({
           el: '#menu-offer-toggle-bar3',

           data: {
               isShow: false,
               isShow1: false,
               menu:'Menu',
               pizzastefano:'Pizze New Trends',
               message:''
           },

           methods: {
             myFilter: function(){
                 this.isActive = !this.isActive;
               // some code to filter users
             }
           }
         })


         new Vue({
              el: '#menu-offer-toggle-bar4',

              data: {
                  isShow: false,
                  menu:'Menu',
                  pizzastefano:'Sałatki',
                  message:''
              },

              methods: {
                myFilter: function(){
                    this.isActive = !this.isActive;
                  // some code to filter users
                }
              }
            })


            new Vue({
                 el: '#menu-offer-toggle-bar5',

                 data: {
                     isShow: false,
                     isShow1: false,
                     menu:'Menu',
                     pizzastefano:'Dodatki',
                     message:''
                 },

                 methods: {
                   myFilter: function(){
                       this.isActive = !this.isActive;
                     // some code to filter users
                   }
                 }
               })


               new Vue({
                    el: '#menu-offer-toggle-bar6',

                    data: {
                        isShow: false,
                        isShow1: false,
                        menu:'Menu',
                        pizzastefano:'Napoje',
                        message:''
                    },

                    methods: {
                      myFilter: function(){
                          this.isActive = !this.isActive;
                        // some code to filter users
                      }
                    }
                  })


                  new Vue({
                       el: '#third-page-website',

                       data: {
                           client:'Zostań stałym smakoszem Pizzy Stefano i korzystaj z naszych promocji dostępnych tylko dla stałych klientów',
                           inputemail:'',
                           inputname:'',


                       },

                       methods: {
                         myFilter: function(){
                             this.isActive = !this.isActive;
                           // some code to filter users
                         }
                       }
                     })

                     new Vue({
                          el: '#fourth-page-website',

                          data: {
                              contactdata:'Masz pytania? Chcesz złożyć zamowienie? Zapraszamy!',
                              phone:'+(48) 58 71 81 333',
                              contactdata1:'Masz inną sprawę? Zadzwoń, bądź wyślij nam wiadomość przez formularz. Odezwiemy się tak szybko, jak tylko będzie to możliwe.',



                          },

                          methods: {
                            myFilter: function(){
                                this.isActive = !this.isActive;
                              // some code to filter users
                            }
                          }
                        })


                        new Vue({
                             el: '#footer-data',

                             data: {
                                 footerdata:'Ⓒ 2018 - Stefano - Pizza Sopot - Najlepsza Pizza W Mieście | by Jan Szczęśniewicz & Gokhan Koc'


                             },

                             methods: {
                               myFilter: function(){
                                   this.isActive = !this.isActive;
                                 // some code to filter users
                               }
                             }
                           })
