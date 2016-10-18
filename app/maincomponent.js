$(document).ready(function() {
  var $landing_header = $('#landing_header'),
      $landing_subheader = $('#landing_subheader'),
      $products_button = $('#products_button'),
      $values_button = $('#values_button');

  $.ajax({
    url: '/get_content',
    type: 'GET',
    success: function(response) {
      object = response.data;
      main_info = object.Main_Info;
      main_info_keys = Object.keys(main_info);
      main_info_cat = main_info[main_info_keys];
      for (i in object.Main_Info) {
        // console.log(object[i])
      }
      for (i in main_info[main_info_keys]) {
      }
        console.log(main_info_cat)

      // landing top nav population
      $landing_header.empty().append(main_info_cat.Header)
      $landing_subheader.empty().append(main_info_cat.Subheader)

    },
      error: function(jqXHR, textStatus, errorThrown) {
      console.log('No JSON detected. Check that syntax.');
    }
  });
});
  


