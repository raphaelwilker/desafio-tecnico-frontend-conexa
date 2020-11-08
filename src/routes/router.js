module.exports = [{

    path: '/home',
    name: 'home',
    component: require('../components/home'),
    props:{ name: true }

 
},{

    path: '/listMedicalAppointment',
    name: 'listMedicalAppointment',
    component: require('../components/list-medical-appointment')

},{

    path: '/details/',
    name: 'details',
    component: require('../components/details'),
    props: true

},{

    path: '/enrollMedicalAppointment',
    component: require('../components/enroll')

},{
    path: '/',
    name: 'login',
    component: require('../components/login')
}]