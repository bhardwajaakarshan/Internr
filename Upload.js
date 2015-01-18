/**
 * Created by The Mamba on 1/18/2015.
 */
Parse.initialize("RCRz0PUBIulU5FOEHjkQwArK3vSh0k5UciUeWzQD", "gyeuW3y4AqDMel71tH4lKldbA8LeOeIm7ZcTCde5");

var information = [
    {
        name: 'Spotify',
        description: 'Internship for Spotify.',
        image: 'http://tech.co/wp-content/uploads/2014/12/spotify.png',
        order: 1
    },
    {
        name: 'Facebook',
        description: 'Internship for Facebook.',
        image: 'https://www.facebook.com/images/fb_icon_325x325.png',
        order: 2
    },
    {
        name: 'Google',
        description: 'Internship for Google.',
        image: 'http://www.newssetup.com/wp-content/uploads/2014/10/Google-Logo-3.jpg',
        order: 3
    },
    {
        name: 'Verizon',
        description: 'Internship for Verizon.',
        image: 'http://allthingsd.com/files/2011/07/Verizon-logo-big.png',
        order: 4
    },
    {
        name: 'Comcast',
        description: 'Internship for Comcast.',
        image: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Comcast_Logo.svg/2000px-Comcast_Logo.svg.png',
        order: 5
    },
    {
        name: 'SnapChat',
        description: 'Internship for SnapChat.',
        image: 'http://techhive.de/blog/wp-content/uploads/2014/11/snapchat-logo-png.png',
        order: 6
    }

];

for(var i = 0; i < information.length; i++){
    var RecruiterUpload = Parse.Object.extend("RecruiterUpload");
    var recruiterUpload = new RecruiterUpload();

    recruiterUpload.save({
        name: information[i].name,
        description: information[i].description,
        order: information[i].order,
        image: information[i].image
    }, {
        success: function(recruiterUpload) {
            // The object was saved successfully.
            alert('New object created with objectId: ' + recruiterUpload.id);
        },
        error: function(recruiterUpload, error) {
            // The save failed.
            // error is a Parse.Error with an error code and message.
            alert('New object failed ' + recruiterUpload.id);
        }
    });
}
