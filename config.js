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
    byline: 'By ESA hub Malawi',
    footer: 'Malawi Red Cross Society - Nkhoma University - OSM Malawi.',
    chapters: [
        {
            id: 'Lilongwe',
            alignment: 'left',
            hidden: false,
            title: 'Lilongwe University of Agriculture and NAtural Resources',
            image: 'images/luana.jpg',
            description:'Rachael Kaunda  and Christine Mhone (both from OSM Malawi) took the initiative to organize a mapping event at Chancellor College, where they were able to map 1744 buildings, 18.88 kilometers of roads, and 9.2 kilometers of river line. However, there were a number of challenges encountered, including unstable internet activity, a large and unfocused mapping area, a lack of electricity, and difficulties printing the signing sheets that were assigned to each participant.',
            location: {
                center: [33.770254, -14.183325],
                zoom: 10.4,
				pitch: 59.5,
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
            ],
        },

        {
            id: 'Nkhoma',
            alignment: 'right',
            hidden: false,
            title: 'Nkhoma University',
            image: 'images/Nkhoma.jpg',
            description:'Participants were able to:  to login on HOT website and open task manager and map project #14513 and were able to map roads and buildings. The participants managed to create 637 buildings and 18 roads were created of 15.5 km and they planned to continue mapping the project after the activity. We also had 17 females and 12 males which was more than the expected turn up and also high number of female participants. Most participants were busy with exams as they were closing the first half of the semester and they had to join the activity soon after they finished the exams, the other problem was internet connectivity whereby the internet had shut down for approximately 45 minutes and we managed to switch to different service providers.',
            location: {
                center: [34.10626259672374, -14.037872304743676], 
                zoom: 10.4,
				pitch: 59.5,
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
            id: 'Chanco',
            alignment: 'left',
            hidden: false,
            title: 'Chanco University',
            image: 'images/Chanco.jpg',
            description:'Patrick Ken Kalonde & Blessings Chiepa (Both from Liverpool Welcome Programme and from OSM Malawi) Took a Lead in organizing mapping event at Chancellor College where they managed to map 2499 buildings,161.88 Kilometers of roads mapped: 8.51 kilometers of river line mapped during the activity internet activity was not stable, Mapping area was too large and lacked focus, There was no electricity and we found it challenging to print the signing sheets that were assigned to us by Red Cross, as such the facilitators arrived in Blantyre during odd hours (after 9 PM).',
            location: {
                center: [35.33728019287816, -15.389368271134405],
                zoom: 10.4,
				pitch: 59.5,
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
            id: 'Must',
            alignment: 'left',
            hidden: false,
            title: 'Malawi University of Science and Technology',
            image: 'images/Must.jpg',
            description:'The project called for participants to map out buildings and major roads in Chikwawa. The number of buildings digitized cumulatively are 1,333 and 17 km worth of road length. A total of 12 participants attended the mapathon, with the following breakdown: The scheduling of the mapathon clashed with the school’s VC trophy activities, this led to less people being able to attend the mapathon. We had a couple of new mappers, meaning that some time was taken to train them on how to use OSM and accurately digitize the features of interest.',
            location: {
                center: [35.21690014084476, -15.90174986456486],
                zoom: 10.4,
				pitch: 59.5,
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
            id: 'Chikwawa',
            alignment: 'right',
            hidden: false,
            title: 'Chikwawa',
            image: 'images/Dronepic1.jpg',
            description:'The first flooding in this particular community, there is no designated evacuation centre. However, during this flooding, affected communities settled/evacuated to one of  the nearby churches which is located on higher ground.They reported that the most notable challenges are Low food supplies/support, Marriage/family disconnection.',
            location: {
                center: [34.760559, -16.062261],
                zoom: 10.4,
				pitch: 59.5,
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
            alignment: 'left',
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
