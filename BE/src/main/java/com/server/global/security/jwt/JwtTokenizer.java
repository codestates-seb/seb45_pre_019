package com.server.global.security.jwt;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;

public class JwtTokenizer {
	// 시크릿키를 암호화
	public String encodeBase64SecretKey(String secretKey) {
		return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
	}

	// 액세스 토큰 생성
	public String generateAccessToken(Map<String, Object> claims, // 사용자와 관련된 정보들
		String subject, // 토큰의 이름
		Date expiration, // 토큰만료일
		String base64EncodedSecretKey //암호화된 비밀키
		) {
		Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

		// 빌더로 액세스 토큰 생성
		return Jwts.builder()
			.setClaims(claims) // 사용자와 관련된 추가 정보들 지정
			.setSubject(subject) // 토큰의 이름 지정
			.setIssuedAt(Calendar.getInstance().getTime()) // 토큰의 발행 일자 지정
			.setExpiration(expiration) // 토큰의 만료 일자 지정
			.signWith(key) // 토큰의 서명에 사용할 시크릿키 지정
			.compact(); // 토큰 생성 및 직렬화
	}

	// 리프래쉬 토큰 생성
	public String generateRefreshToken(String subject, Date expiration, String base64EncodedSecretKey) {
		Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

		// 리프래쉬 토큰은 액세스 토큰 재발급 용도로만 사용되기 때문에
		// Claims 같은 추가 정보가 필요없음
		return Jwts.builder()
			.setSubject(subject)
			.setIssuedAt(Calendar.getInstance().getTime())
			.setExpiration(expiration)
			.signWith(key)
			.compact();
	}

	// 암호화된 시크릿키를 복호화하여 암호화 알고리즘 적용
	private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
		byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);  // 암호화된 시크릿키 복호화
		Key key = Keys.hmacShaKeyFor(keyBytes);    // 새로운 알고리즘 적용해서 암호화
		//

		return key;
	}
}
