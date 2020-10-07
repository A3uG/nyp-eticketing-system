// TODO: Make toasts more responsive

// The variables you see here are ejs templates that will be used for client side templating, so that we can to create html on the fly easily for stuff like ajax
// Some of these templates, like toast, are exact copies of the ones you see in the templates folder on the server
// The major disadvantage with this approach tho, is that it is possible to inject the template string with javascript code by simply adding the script tag anywhere inside. This is obviously a big problem that needs to be fixed. (eg: try adding '<script>alert("hello")</script>' in any of the template strings and have ejs execute them)

// UPDATE THE APPROPRIATE TEMPLATE HERE AND CHANGES WILL BE REFLECTED ON TEMPLATES USED AFTER PAGE LOAD
const templates = {
    toast: '<% for (var i = 0; i < notifications.length; i++) { %> <div class="toast bg-<%= notifications[i].type %>-75" role="alert" aria-live="assertive" aria-atomic="true" data-delay="100000"> <div class="toast-body p-4"> <div class="container-fluid p-0"> <div class="row"> <div class="col-10"> <span class="h5 text-white font-weight-medium"><%= notifications[i].message %></span> </div> <div class="col-2"> <button type="button" class="close" data-dismiss="toast" aria-label="Close"> <span aria-hidden="true" class="text-white">×</span> </button> </div> </div> </div> </div> </div> <% } %>'
}