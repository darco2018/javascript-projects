2 examples of fetch: one with json, one with blob.
Mark also converting blob to url:
var objectURL = URL.createObjectURL(blob);
and rounding:
product.price.toFixed(2);

About the best equivalent to Fetch's response.ok in XHR is to check whether 
request.status is equal to 200, or if request.readyState is equal to 4.
