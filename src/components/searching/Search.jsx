import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.css';

export const Search = ({ title, handleChange }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <span className={styles.filterText}>Busca tu producto favorito:</span>
          <div className={styles.searchContainer}>
            <input
              className={styles.input}
              name='title'
              onChange={handleChange}
              placeholder='Buscar...'
            />
            <SearchIcon style={{ color: 'black', fontSize: 25 }} />
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.filterText}>Ordenar Productos:</span>
          <select
            className={styles.select}
            onChange={(e) => console.log(e.target.value)}
          >
            <option className={styles.option} value='newest'>
              Lo más nuevo
            </option>
            <option className={styles.option} value='asc'>
              Precios altos
            </option>
            <option className={styles.option} value='desc'>
              Precios bajos
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
