// run @ http://awspolicygen.s3.amazonaws.com/policygen.html

// count services
Object.keys(app.PolicyEditorConfig.serviceMap).length

// count actions
nums = 0; $.each(app.PolicyEditorConfig.serviceMap, function(a,b) {nums +=b.Actions.length});
