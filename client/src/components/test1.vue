<template>
    <div>
        <panel>
            <table class="table">
                <!--<thead>-->
                <!--<tr>-->
                    <!--<th scope="col">#</th>-->
                    <!--<th scope="col">First</th>-->
                    <!--<th scope="col">Last</th>-->
                    <!--<th scope="col">Handle</th>-->
                <!--</tr>-->
                <!--</thead>-->
                <tbody>
                <tr>
                    <th scope="row">Math</th>
                    <td>
                        <ul style="list-style: none;">
                            <li><router-link to="/test2"><a href="">linear Algebra</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                        </ul>
                    </td>
                    <td>
                        <ul style="list-style: none;">
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                        </ul>
                    </td>
                    <td>
                        <ul style="list-style: none;">
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>
                        <ul style="list-style: none;">
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                        </ul>
                    </td>
                    <td>
                        <ul style="list-style: none;">
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                        </ul>
                    </td>
                    <td>
                        <ul style="list-style: none;">
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>
                        <ul style="list-style: none;">
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                        </ul>
                    </td>
                    <td>
                        <ul style="list-style: none;">
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                        </ul>
                    </td>
                    <td>
                        <ul style="list-style: none;">
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                            <li><router-link to=""><a href="">link</a></router-link></li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </panel>
    </div>
</template>

<script>
  import Panel from '@/components/Panel'

  export default {
    data: () => ({
      currentComponent: null,
      componentsArray: ['foo', 'bar']

      //     rowsPerPageItems: [4, 8, 12],
      //     pagination: {
      //       rowsPerPage: 4
      //     },
      //     items: [
      //       {
      //         name: 'Math',
      //         classes: [
      //           {name: 'linear algebra'},
      //           {name: 'calculus'},
      //           {name: 'trigonometry'},
      //           {name: 'geometry 5'},
      //           {name: 'linear'},
      //           {name: 'calculus 3'},
      //           {name: 'trigonometry 2'},
      //           ],
      //
      //       },
      //       {
      //         name: 'Science',
      //         classes: [
      //           {name: 'linear algebra'},
      //           {name: 'calculus'},
      //           {name: 'trigonometry'},
      //           {name: 'geometry 5'},
      //           {name: 'linear'},
      //           {name: 'calculus 3'},
      //           {name: 'trigonometry 2'},
      //         ],
      //       },
      //       {
      //         name: 'Physics',
      //         classes: [
      //           {name: 'linear algebra'},
      //           {name: 'calculus'},
      //           {name: 'trigonometry'},
      //           {name: 'geometry 5'},
      //           {name: 'linear'},
      //           {name: 'calculus 3'},
      //           {name: 'trigonometry 2'},
      //         ],
      //       },
      //       {
      //         name: 'Computer Science',
      //         classes: [
      //           {name: 'linear algebra'},
      //           {name: 'calculus'},
      //           {name: 'trigonometry'},
      //           {name: 'geometry 5'},
      //           {name: 'linear'},
      //           {name: 'calculus 3'},
      //           {name: 'trigonometry 2'},
      //         ],
      //       }
      //     ]
    }),

    components: {
      Panel,
      'foo': {
        template: '<h1>Foo component</h1>'
      },
    },
    methods: {
      swapComponent: function (component) {
        this.currentComponent = component;
      }
    }
  }
</script>

<style scoped>
    a {
        /*text-decoration: none;*/
        color: black;
    }
    router-link {
        /*text-decoration: none;*/
        color: black;
    }

</style>