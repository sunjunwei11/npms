var iife_ok = (function () {
    'use strict';

    let Vue;

    class MyVueRouter {
        constructor(options) {
            this.options = options;
            this.current = '/';
            this.hashChange = this.hashChange.bind(this);

            Vue.util.defineReactive(this, 'matchRoutes', []);

            window.addEventListener('load', this.hashChange);
            window.addEventListener('hashchange', this.hashChange);
        }
        hashChange() {
            this.matchRoutes = [];
            this.current = window.location.hash.slice(1);
            this.match(this.options.routes);
        }
        match(routes) {
            routes.forEach(item => {
                if (item.path === '/' && item.path === this.current) {
                    this.matchRoutes.push(item);
                    return;
                }
                if (item.path !== '/' && this.current.indexOf(item.path) !== -1) {
                    this.matchRoutes.push(item);
                    if (item.children) {
                        this.match(item.children);
                    }
                    return;
                }
            });
        }
    }

    MyVueRouter.install = _Vue => {
        Vue = _Vue;

        Vue.mixin({
            beforeCreate() {
                if (this.$options.router) {
                    Vue.prototype.$router = this.$options.router;
                }
            },
        });

        Vue.component('router-link', {
            props: {
                to: {
                    type: String,
                    required: true
                }
            },
            render(h) {
                return h('a', 
                { attrs: 
                    {
                        href: '#' + this.to 
                    }
                }, this.$slots.default);
            }
        });

        Vue.component('router-view', {
            render(h) {
                let depth = 0;
                this.$vnode.data.isRouterView = true;

                let parent = this.$parent;
                while (parent) {
                    if (parent?.$vnode?.data?.isRouterView) {
                        depth++;
                    }
                    parent = parent.$parent;
                }

                const matchRoutes = this.$router.matchRoutes;

                let com = null;

                if (matchRoutes[depth]) {
                    com = matchRoutes[depth].component;
                }

                return h(com);
            }
        });
    };

    return MyVueRouter;

})();
