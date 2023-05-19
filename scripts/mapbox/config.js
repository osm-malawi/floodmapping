 var config = {
    style: 'mapbox://styles/sgmapbox/ck8etv6jr25781jqhhq8clbzc',
    accessToken: 'pk.eyJ1Ijoic2dtYXBib3giLCJhIjoiY2s5NHViY251MDUweDNkbzVnYmJtbXYydCJ9.8Ra0D8yuCz7g6UMyWaMNpA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    //inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'ESA Hub Malawi Map Story',
    subtitle: 'A story about FDGs that were conducted in Nsanje and Chikwawa',
    byline: 'By Esu hub Malawi',
    footer: 'Wonder just trying out tings nah mean.',
    chapters: [
        {
            id: 'Chikwawa',
            alignment: 'left',
            hidden: false,
            title: 'Chikwawa',
            image: 'images/Dronepic1.jpg',
            description:'The first flooding in this particular community, there is no designated evacuation centre. However, during this flooding, affected communities settled/evacuated to one of  the nearby churches which is located on higher ground.They reported that the most notable challenges are Low food supplies/support, Marriage/family disconnection.',
            location: {
                center: [34.760559, -16.062261],
                zoom: 10.4,
				pitch: 5.5,
				bearing: -1.19
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'natmall-visitors-circles',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'natmall-visitors-circles',
                     opacity: 1
                 }
            ]
        },
        {
            id: 'Nsanje',
            alignment: 'right',
            hidden: false,
            title: 'Nsanje',
            image: 'images/Dronepic2.jpg',
            description: 'The area has one evacuation centre at Ntchuwa Evacuation centre. However, there is an unequal distribution of relief items at the evacuation centre. Additionally, they mentioned that Donors have specific groups they always target and neglect others despite needing an immediate solution. On the other hand, members reported that deforestation uphill is worsening the floods in the area. They also mentioned the new road which forms a dam for water, hence the water drains with higher velocity in the culverts. They suggested intensifying tree planting and conservation uphill. Additionally, they suggested that tarmac roads must have culverts away from the communities.',
            location: {
                center: [35.12448, -16.59312],
                zoom: 10.4,
				pitch: 59.5,
				bearing: -1.19
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
			
			//layer: 'natmall-buildings',
				//opacity: 0.8,
			],
            onChapterExit: [
			
			//layer: 'natmall-buildings',
				//opacity: 0.3,
			]
        },
       
      
    ]
};
