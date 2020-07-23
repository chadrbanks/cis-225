<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'crbanks1' );

/** MySQL database username */
define( 'DB_USER', 'crbanks1' );

/** MySQL database password */
define( 'DB_PASSWORD', 'qazco47' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Si^] D~3MvQA B%0DeFQ 5-+_-zk-4Y%0x]zeH)!;>>=NBIQV-GUdzW*8YL6eYh1' );
define( 'SECURE_AUTH_KEY',  '9la9.Z}f+MxN, Lc(%u9fnS?2Uyw8QrtkQhA?}f5~R_1eP+hne5;`-=-CydOm0!m' );
define( 'LOGGED_IN_KEY',    '8`}N1e:;nI-qPiFtO9:<U*c+AfYT(4}6Ox3I7k&TFOP3{cxs%cnRvVQ:mW>|@rU#' );
define( 'NONCE_KEY',        'd+09M]LVq7_rt37,iVeEa:m[eA6MDG0jUMJ&)N4D=IrBC<l*XGrb%PupR1_HV{r=' );
define( 'AUTH_SALT',        '(X|NIkiD=8>u`=gqB$n N+sA=}Q;.._uu@X1:sq!7yG~,NrLeLxr)RLcdGP]Rb :' );
define( 'SECURE_AUTH_SALT', ' ,1P2R.G}1ead4eV$3tWco{TIRNL]SSm=IxPhuVcDuE#.-+,~<0^?U&?;qQ|H7LK' );
define( 'LOGGED_IN_SALT',   'j,27(=c%pAE+e/Q#lIb2.+jWYnfP?X5[~MlIjXzCtG6>a&z,Vs@&IAe7rkjUAtpF' );
define( 'NONCE_SALT',       '2`KX}5y$lt:x mu3,<YcZZe|D+xYjqsO,06[yByD6n;MwEbCa;=UpB_Em=lcJQ3:' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';