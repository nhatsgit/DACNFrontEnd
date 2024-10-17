import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import { routePaths } from '../../../routes';
import { Link } from 'react-router-dom';
function SearchForm() {

    const [keyword, setKeyword] = useState("");
    const debouncedKeyword = useDebounce(keyword, 350);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)
    const inputRef = useRef();

    useEffect(() => {
        if (debouncedKeyword.trim() === '') {
            setSuggestions([]);
            setKeyword('');
            return;
        }
        fetchProducts(debouncedKeyword);
        setShowSuggestions(true);
    }, [debouncedKeyword]);

    function handleClearInput() {
        setShowSuggestions(false)
        setKeyword('');
        inputRef.current.focus();
    };
    function handleSearchSubmit() {
        setShowSuggestions(false);
        setKeyword('');
    }
    function handleCompleteSuggestion(suggestion) {
        setKeyword(suggestion);
        setShowSuggestions(false);
    }
    const fetchProducts = async (query) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos'); // Đường dẫn API giả lập
            if (!response.ok) {
                throw new Error('Lỗi khi tải sản phẩm');
            }
            const data = await response.json();
            const results = data.filter(result => result.title.startsWith(query))
            setSuggestions(results.slice(0, 5))

        } catch (err) {
            return
        } finally {
            return
        }
    };
    return (
        <form id="search-form" className="dropdown">
            <div className="search-container">

                <input className="inputSearch" value={keyword} type="text" name="query" onChange={(event) => handleCompleteSuggestion(event.target.value)} ref={inputRef} id="searchInput" placeholder="Tìm kiếm sản phẩm trong hệ thống..." />
                {keyword && (
                    <button

                        type="button"
                        onClick={handleClearInput}
                        style={{
                            position: 'absolute',
                            right: '160px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            fontSize: '18px',
                            color: '#888'
                        }}
                    >
                        &times;
                    </button>
                )}
                <Link onClick={handleSearchSubmit} to={`${routePaths.search}?keyword=${keyword}`}>
                    <button

                        className="searchButton"
                        type="submit"
                        onMouseOver={(e) => e.target.style.color = 'black'}
                        onMouseOut={(e) => e.target.style.color = 'white'}
                    >
                        Tìm Kiếm
                    </button>
                </Link>
            </div>
            {showSuggestions &&
                (
                    <div id="suggestions" style={{ display: 'block' }}>
                        {
                            suggestions.map((result) => (
                                <li onClick={() => setKeyword(result.title)}>{result.title}</li>
                            ))
                        }
                    </div>
                )
            }
        </form>
    );
}

export default SearchForm;