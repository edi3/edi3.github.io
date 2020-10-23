(function() {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');
        var searchResultsAmount = document.getElementById('search-results-amount');

        if (results.length) { // Are there any results?
            var appendString = '';
            var pluralString = '';

            if (results.length > 1){
                pluralString = 's'
            }
            var articlesQty = 'Found ' + results.length + ' item' + pluralString;

            for (var i = 0; i < results.length; i++) {  // Iterate over the results
                var item = store[results[i].ref];
                appendString += '<div class="vocabulary-item-row search-results__row">';
                appendString += '<div class="search-results__title"><a href="' + item.url + '" class="search-results__title-link">' + item.title + '</a></div>';
                appendString += '<ul class="vocabulary-item-data">';
                appendString += '<li><strong>@id:</strong> ' + item.graph_id + '</li>';
                appendString += '<li><strong>@type:</strong> ' + item.type + '</li>';
                if (item.comment !== '') {
                    appendString += '<li class="post-item-info-list__item"><strong>rdfs:comment:</strong> ' + item.comment + '</li>';
                }
                if (item.value !== '') {
                    appendString += '<li class="post-item-info-list__item"><strong>rdf:value:</strong> ' + item.value + '</li>';
                }
                appendString += '</ul>';
                appendString += '</div>';
            }

            searchResults.innerHTML = appendString;
            searchResultsAmount.innerHTML = articlesQty;
        } else {
            searchResults.innerHTML = '<div class="search-results__empty">No results found</div>';
            searchResults.classList.add('search-results__list--empty');
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }

    var searchTerm = getQueryVariable('query');

    if (searchTerm) {
        document.getElementById('search-box').setAttribute("value", searchTerm);
        document.getElementById('search-results-value').innerHTML = searchTerm;

        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('comment');
            this.field('graphId');
            this.field('value');
            this.field('cefactIds');
            this.field('cefactComments');
            this.field('cefactUNId');
            this.field('cefactBusinessProcess');
        });

        for (var key in window.store) { // Add the data to lunr
            idx.add({
                'id': key,
                'title': window.store[key].title,
                'comment': window.store[key].comment,
                'graphId': window.store[key].graphId,
                'type': window.store[key].type,
                'value': window.store[key].value,
                'cefact_ids': window.store[key].cefact_ids,
                'cefact_comments': window.store[key].cefact_comments,
                'cefactUNId': window.store[key].cefactUNId,
                'cefactBusinessProcess': window.store[key].cefactBusinessProcess,
            });

            var results = idx.search(searchTerm); // Get lunr to perform a search
            displaySearchResults(results, window.store);
        }
    }
})();