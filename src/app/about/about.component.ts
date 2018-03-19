import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  experiences = [
    {
      name: 'SoftServe',
      date: 'Mar 2018 - Present',
      position: 'Student of IT Academy',
      city: 'Ivano-Frankivsk',
      responsibilities: ['Studying at the IT Academy(Web-UI Development)']
    },
    {
      name: 'LTD "NTMA"',
      date: 'Sep 2014 - Mar 2018',
      position: 'Specialist of IT',
      city: 'Ivano-Frankivsk',
      responsibilities: [
        'Production, modification, and maintenance of websites (HTML5, CSS3, JavaScript, PHP)',
        'Fixing any bugs and website errors',
        'Implementing responsive design',
        'Setting advertising in Google AdWords.',
        'Development brochures and banners (Adobe Photoshop)',
        'Design photos for site content (Adobe Photoshop)',
        'Building a Windows Embedded Standard 7 Image (ICE, IBW)',
      ]
    },
    {
      name: 'OSF GLOBAL SERVICES',
      date: 'Jul 2014 - Aug 2014',
      position: 'Summer Practice',
      city: 'Ivano-Frankivsk',
      responsibilities: [
        'Learning and improving HTML5, CSS3 skills',
        'Implementing responsive design',
        'Web development'
      ]
    }
  ];

  skills = [
    {
      name: 'Web development',
      technology: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'LESS']
    },
    {
      name: 'CMS',
      technology: ['Joomla']
    },
    {
      name: 'Database',
      technology: ['MySQL']
    },
    {
      name: 'Tools',
      technology: ['Adobe Photoshop', 'Sublime Text 3']
    }
  ];

  languages = [
    {
      name: 'Ukrainian',
      level: 'native'
    },
    {
      name: 'English',
      level: 'Intermidiate low'
    }
  ];

  constructor() { }

  ngOnInit() {
  }



}
