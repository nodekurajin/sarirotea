# Get Food Recipes

- Takes an ingredient as input for the recipe search.
- Replace API_URL with the actual URL of the food recipe API you plan to use. You'll also need to obtain an API key and include it in the request.
- Uses `axios.get` to make an asynchronous API call.
- Parses the response data to extract recipe titles and sources.
- Returns a list of recipe objects containing title and source URL (or an empty list on errors).