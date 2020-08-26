import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Test from "@/components/Test";
import Login from "@/components/Login";
import Regist from "@/components/Regist";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/test",
      name: "Test",
      component: Test,
      children: [
        {
          path: "login",
          component: Login
        },
        {
          path: "regist",
          component: Regist
        }
      ]
    }
  ]
});
