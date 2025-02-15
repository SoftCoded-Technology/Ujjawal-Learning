import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header style={{ display:"flex", padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd', flexDirection : 'row' }}>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'row', fontSize: '16px' }}>
                    <li style={{ marginBottom: '10px' }}>
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                display: 'block',
                                padding: '10px',
                                textDecoration: 'none',
                                color: isActive ? 'orange' : 'gray',
                                borderBottom: '1px solid #ddd',
                                transition: 'color 0.2s',
                            })}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <NavLink
                            to="/form"
                            style={({ isActive }) => ({
                                display: 'block',
                                padding: '10px',
                                textDecoration: 'none',
                                color: isActive ? 'orange' : 'gray',
                                borderBottom: '1px solid #ddd',
                                transition: 'color 0.2s',
                            })}
                        >
                            Form
                        </NavLink>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <NavLink
                            to="/history"
                            style={({ isActive }) => ({
                                display: 'block',
                                padding: '10px',
                                textDecoration: 'none',
                                color: isActive ? 'orange' : 'gray',
                                borderBottom: '1px solid #ddd',
                                transition: 'color 0.2s',
                            })}
                        >
                            History
                        </NavLink>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <NavLink
                            to="/todo"
                            style={({ isActive }) => ({
                                display: 'block',
                                padding: '10px',
                                textDecoration: 'none',
                                color: isActive ? 'orange' : 'gray',
                                borderBottom: '1px solid #ddd',
                                transition: 'color 0.2s',
                            })}
                        >
                            Todo
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
