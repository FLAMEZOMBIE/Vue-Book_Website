<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
    export default {
        name:"SideBar",
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Home',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/charts',
                        title: 'Peminjaman',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>